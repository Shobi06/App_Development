import React from 'react';

const CraftCategoryList = () => {
  const categories = [
    {
      category: 'Paper Crafts',
      subcategories: ['Greeting cards', 'Scrapbooking', 'Origami', 'Paper flowers'],
    },
    {
      category: 'Textile and Fabric Crafts',
      subcategories: ['Sewing and quilting', 'Embroidery', 'Knitting and crocheting', 'Weaving', 'Tie-dyeing', 'Fabric painting'],
    },
    {
      category: 'Jewelry Making',
      subcategories: ['Beading', 'Wire wrapping', 'Polymer clay jewelry', 'Metalworking and silversmithing'],
    },
    {
      category: 'Woodworking',
      subcategories: ['Wood carving', 'Furniture making', 'Woodburning (pyrography)', 'Scroll sawing'],
    },
    {
      category: 'Ceramics and Pottery',
      subcategories: ['Hand-built pottery', 'Wheel-thrown pottery', 'Ceramic sculpture'],
    },
    {
      category: 'Glass Crafts',
      subcategories: ['Stained glass', 'Fused glass', 'Glass blowing'],
    },
    {
      category: 'Candle Making',
      subcategories: ['Scented candles', 'Decorative candles', 'Beeswax candles'],
    },
    {
      category: 'Soap Making',
      subcategories: ['Handmade soaps', 'Natural and organic soaps', 'Soap carving'],
    },
    {
      category: 'Home Decor',
      subcategories: ['Home accessories', 'Decorative painting', 'Macrame', 'Wreath making'],
    },
    {
      category: 'Food and Baking',
      subcategories: ['Homemade jams and preserves', 'Baking and decorating cakes', 'Chocolatiering'],
    },
    {
      category: 'Leatherworking',
      subcategories: ['Leather belts and accessories', 'Leather tooling and carving'],
    },
    {
      category: 'Upcycling and Repurposing',
      subcategories: ['Recycling and repurposing materials into new crafts'],
    },
    {
      category: 'Mixed Media Art',
      subcategories: ['Combining various materials and techniques in one project'],
    },
    {
      category: 'Beaded Crafts',
      subcategories: ['Beaded jewelry, clothing, and accessories'],
    },
    {
      category: 'Metal Crafts',
      subcategories: ['Metal jewelry making', 'Metal sculptures'],
    },
    {
      category: 'DIY Home Improvement',
      subcategories: ['Carpentry', 'Tiling', 'Painting'],
    },
  ];

  return (
    <div>
      <h1>Craft Categories</h1>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>
            <h2>{category.category}</h2>
            <ul>
              {category.subcategories.map((subcategory, subIndex) => (
                <li key={subIndex}>{subcategory}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CraftCategoryList;
