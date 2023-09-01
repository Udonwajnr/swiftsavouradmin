import {defineField, defineType} from 'sanity'

export default {
    name:"order",
    title:"Orders",
    type:"document",
    fields:[
        {
            name: 'Restaurant',
            title: 'Restaurant',
            validation: rule=> rule.required(),
            type: 'reference',
            to: [{type: 'restaurant'}]
          },
        {
            name: 'dish',
            title: 'dish',
            validation: rule=> rule.required(),
            type: 'reference',
            to: [{type: 'restaurant'}]
          },
          {
            name: 'rating',
            type: 'number',
            title: 'Enter a number between 1 to 5',
            validation: rule=>rule.required().min(1)
          },
          {
            name: 'status',
            type: 'boolean',
            title: 'Delivery Status',
          },
    ]
}