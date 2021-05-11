import cv2
import numpy as np
## Notes on package-importing:
## Keep simple and decoupled.
## Try to import the fewest packages.
## Try not to import lovelive2/lovelive_sdk/pie3 packages, and so on.
## The backend will skip some unaccepted packages.

## set True if atom info is required. see `view` for details
ATOM_INFO_REQUIRED = True

BLC_8 = 4
BLC_10 = 16
SHAPE = (1520, 2688)


def decode_12bits(img):
    # 76543210 xxxxBA90
    img = img[0::2] + img[1::2] * 256
    return (img // 16).astype('uint8')


def decode_10bits(img):
    # xxxxxx98 76543210
    img = img[1::2] + img[0::2] * 256
    return img


def decode_8bits(img):
    # 76543210
    return img


def read_raw(buf):
    img = np.frombuffer(buf, dtype='uint8')
    if img is None:
        return None
    try:
        if len(img) == SHAPE[0] * SHAPE[1]:
            img = decode_8bits(img)
            bits = 8
        else:
            # hack
            if img[0] > 4:
                img = decode_12bits(img)  # no more 12bits image
                bits = 8  # 12bits image contains only 8 bits
            else:
                img = decode_10bits(img)
                bits = 10
        img = img.reshape(SHAPE)
        return img, bits
    except Exception as e:
        print(e)
        return None, None


def read_channels(buf):
    try:
        img, bits = read_raw(buf)
        if img is None:
            return None, None
        IR = img[1::2, 1::2]
        G1 = img[1::2, 0::2]
        G2 = img[0::2, 1::2]
        RB = img[0::2, 0::2]
        R1 = RB[0::2, 1::2]
        R2 = RB[1::2, 0::2]
        B1 = RB[0::2, 0::2]
        B2 = RB[1::2, 1::2]
        return (B1, B2, G1, G2, R1, R2, IR), bits
    except Exception as e:
        print(e)
        return None, None


def get_channels(buff):
    data, bits = read_channels(buff)
    if data is None:
        return None
    if bits == 8:
        B1, B2, G1, G2, R1, R2, IR = [
            np.clip(i.astype('float32') - BLC_8, 0, None) for i in data
        ]
    else:
        B1, B2, G1, G2, R1, R2, IR = [
            np.clip(i.astype('float32') - BLC_10, 0, None) for i in data
        ]

    IR = (IR[0::2, 0::2] + IR[1::2, 0::2] + IR[0::2, 1::2] +
          IR[1::2, 1::2]) / 4
    B = (B1 + B2) / 2
    R = (R1 + R2) / 2
    G = (G1 + G2) / 2
    G = (G[0::2, 0::2] + G[1::2, 0::2] + G[0::2, 1::2] + G[1::2, 1::2]) / 4
    return B, G, R, IR


def view(buf, **kwargs):
    """
    convert bytes on brainpp to a np.ndarray

    :param buf: bytes stored on brainpp read by lovelive_sdk
    :param kwargs: value stored in Atom's `viewer_params` meta. If `ATOM_INFO_REQUIRED` is set True, Atom object `atom` and int `pic_index` are pushed in kwargs

    :return: np.ndarray
    """
    atom = kwargs['atom']
    rotation = atom.get_meta('rotation')
    B, G, R, IR = [
        i if rotation == 0 else i[::-1, ::-1] for i in get_channels(buf)
    ]

    R, G, B = [np.clip(i, 0, 1023).astype('int32') for i in [R, G, B]]
    img = np.stack([B, G, R], axis=2) / 4
    img = np.clip(img.astype('int32'), 0, 255).astype('uint8')
    IR = np.clip(IR, 0, 1023).astype('int32')
    IR = np.clip(np.stack([IR, IR, IR], axis=2) / 4, 0, 255).astype('uint8')
    img = np.vstack([img, IR])
    return img