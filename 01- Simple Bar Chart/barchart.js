


const svg = d3.select('body').append('svg').attr("width","100%").attr("height","100%")


db.collection('Students').get().then(function(res){

	data = [];
	res.docs.forEach( function(doc){

		data.push(doc.data())

	});
console.log(data)




svg.selectAll("rect")
	.data(data)
	.enter().append("rect")
	.attr("width", 50)
	.attr("height",d => d.marks)
	.attr("fill","teal")
	.attr("x", (d,i) => 60*i)
	.attr("y",)

})
