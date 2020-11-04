# my_first_midway_project

{{description}}

## Badges

[![Build status][build-status-image]][aone-ci-url]
[![Line coverage][line-coverage-image]][aone-ci-url]
[![Branch coverage][branch-coverage-image]][aone-ci-url]
![install-alinode ^4](https://duing.alibaba-inc.com/img/label?key=install-alinode&value=%5E4&keyBgColor=505050&valueBgColor=51CA2A&size=12)

[aone-ci-url]: https://aone-api.alibaba-inc.com/ak/testservice/api/badge/link?repo=git@github.com:weiweiwei256/basics-learn.git
[build-status-image]: https://aone-api.alibaba-inc.com/ak/testservice/api/badge/query?repo=git@github.com:weiweiwei256/basics-learn.git&type=%E6%9E%84%E5%BB%BA%E7%8A%B6%E6%80%81
[line-coverage-image]: https://aone-api.alibaba-inc.com/ak/testservice/api/badge/query?repo=git@github.com:weiweiwei256/basics-learn.git&type=%E5%8D%95%E6%B5%8B%E8%A1%8C%E8%A6%86%E7%9B%96%E7%8E%87
[branch-coverage-image]: https://aone-api.alibaba-inc.com/ak/testservice/api/badge/query?repo=git@github.com:weiweiwei256/basics-learn.git&type=%E5%8D%95%E6%B5%8B%E5%88%86%E6%94%AF%E8%A6%86%E7%9B%96%E7%8E%87

--------------------

## QuickStart

<!-- add docs here for user -->

see [midway docs][midway] for more detail.

### Development

```bash
$ tnpm i
$ tnpm run dev
$ open http://localhost:6001/
```

### Deploy

```bash
$ tnpm start
$ tnpm stop
```

### tnpm scripts

- Use `tnpm run lint` to check code style.
- Use `tnpm test` to run unit test.
- Use `tnpm run autod` to auto detect dependencies upgrade, see [autod](https://www.tnpmjs.com/package/autod) for more detail.


[midway]: https://midwayjs.alibaba-inc.com
