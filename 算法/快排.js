let data = [5, 4, 7, 8, 2, 7, 8, 5, 6, 3]
// let data = [5, 6, 6, 7, 7, 8, 9, 10]
function quickSort(data) {
    if (data.length === 1) {
        return data
    }
    let temp = data[0]
    let i = 1
    let j = data.length - 1
    while (i !== j) {
        if (data[j] > temp) {
            j--
        } else if (data[j] <= temp) {
            if (data[i] <= temp) {
                i++
            } else {
                // 交换
                console.log('data[i]', data[i])
                console.log('data[j]', data[j])
                ;[data[i], data[j]] = [data[j], data[i]]
                console.log(data)
            }
        }
    }
    if (data[0] > data[j]) {
        // 当 j==i且data[j]>temp 时 不交换
        ;[data[0], data[j]] = [data[j], data[0]]
    }
    return [...quickSort(data.slice(0, j)), ...quickSort(data.slice(j, data.length))]
}

console.log(quickSort(data))
