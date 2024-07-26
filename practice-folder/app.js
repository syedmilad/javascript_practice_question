const scannerData = [
    {
        id:1,
        name: "charting patterns",
        isToggle: false,
        lists:[
            {name: "chart 1",defaultValue: false,type:'checkbox',isSelected: false},
            {name: "chart 2",defaultValue: false,type:'checkbox',isSelected: false},
            {name: "chart 3",defaultValue: false,type:'checkbox',isSelected: false},
            {name: "chart 4",defaultValue: false,type:'checkbox',isSelected: false},
        ]
    },
    {
        id:2,
        name: "charting patterns",
        isToggle: false,
        lists:[
            {name: "chart 1",defaultValue: false,type:'checkbox',isSelected: false},
            {name: "chart 2",defaultValue: false,type:'checkbox',isSelected: false},
            {name: "chart 3",defaultValue: false,type:'checkbox',isSelected: false},
            {name: "chart 4",defaultValue: false,type:'checkbox',isSelected: false},
        ]
    },
    {
        id:3,
        name: "charting patterns",
        isToggle: false,
        lists:[
            {name: "checkbox",defaultValue: false,type:'checkbox',isSelected: false},
            {name: "checkbox",defaultValue: false,type:'checkbox',isSelected: false},
            {name: "checkbox",defaultValue: false,type:'checkbox',isSelected: false},
        ]
    },
]

function isChangeSelected(list) {
    const updatedArr = scannerData.map((item)=>{
        return {
            ...item,
            lists: item.lists.map((val)=>{
                return {
                    ...val,
                    name: "milad aiajzi"
                }
            })
        }
    })
    return updatedArr
};

const result = isChangeSelected()
console.log(result)

function push(newObj) {
    return {
        ...scannerData,
        [scannerData.length+1]: newObj
    }
}

console.log(push({name:"milad",age: "1232"}))
console.log(push({name:"faiz",age: "1232"}))
console.log(scannerData.length)

