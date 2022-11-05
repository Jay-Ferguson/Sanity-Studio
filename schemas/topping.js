export default {
  name: 'topping',
  title: 'Toppings',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Topping Name',
      type: 'string',
      description: 'name of the topping ',
    },

    {
      name: 'vegeterian',
      title: 'vergeterian',
      type: 'boolean',
      description: 'name of the topping ',
      options: {
        layout: 'checkbox',
      },
    },

    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 200,
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      description: 'cost of the pizza',
      validation: (Rule) => Rule.min(1000).max(5000),
      // Todo add custom input components
    },
  ],

  preview: {
    select: {
      name: 'name',
      vegetarian: 'vegetarian',
    },
    prepare: ({ name, vegetarian }) => ({
      title: `${name} ${vegetarian ? '🥬' : ''}`,
    }),
  },
};
