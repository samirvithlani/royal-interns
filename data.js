var data = {
        books : [
            {
                title: "The Hobbit",
                price:1500,
                year:2010,
                rating:4.5,
            },
            {
                title: "abc",
                price:4500,
                year:2015,
                rating:4.9,
            },
            {
                title: "java",
                price:250,
                year:2001,
                rating:3.6,
            },
            {
                title: "c++",
                price:150,
                year:2012,
                rating:4.2,
            }
        ]
}

/*
1) find books published between 2001 and 2010
2) find book ratings greater than or equal 4.5
3) find book price less than 1500 and rating greater than 4
4) find book title contains 'a'
5) find book published in leap year
*/

var x = data.books.filter((b)=>{
    return b.year % 4 == 0 || b.year % 100 == 0 || b.year % 400 == 0
})
console.log(x)