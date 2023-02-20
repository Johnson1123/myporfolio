export default {
    name: 'testimonial',
    title: 'Testimonial',
    type: "document",
    fields:[
        {
            name: 'name',
            title: 'Name',
            type: 'string'       
        },
        {
            name: "comment",
            title: "Comment",
            type: "string"
        },
        {
            name: "level",
            title: "Level",
            type: "string"
        },
        {
            name: "company",
            title: "Company",
            type: "string"
        },
        {
            name: 'imageurl',
            title: 'Imageurl',
            type: 'image',
            option: {
                hotspot: true,
            }
        },
    ]
}