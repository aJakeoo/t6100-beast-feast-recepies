// Add or edit Beast Feast recipes here. Each entry can include:
//   name (required), meta, ingredients (array), steps (array), tip
// Omit "meta" for no header line, or "tip" to hide the Scoutmaster tip box.
const RECIPES = [
  {
    name: 'Cast-Iron Venison Chili',
    meta: 'Serves 12 · 1 hr 30 min',
    ingredients: [
      '2 lb ground venison (or beef)',
      '2 cans kidney beans, drained',
      '1 can crushed tomatoes',
      '2 onions, diced',
      '3 cloves garlic, minced',
      '2 tbsp chili powder',
      '1 tbsp cumin',
      'Salt & pepper to taste'
    ],
    steps: [
      'Brown venison in a large cast-iron pot over the fire, breaking it up as it cooks.',
      'Add onions and garlic; cook until soft, about 5 minutes.',
      'Stir in chili powder, cumin, salt, and pepper.',
      'Add tomatoes and beans; simmer uncovered 45 minutes, stirring occasionally.',
      'Taste and adjust seasoning before serving.'
    ],
    tip: 'Keep the pot slightly off-center over the coals and rotate every 10 minutes so it doesn’t scorch on one side.'
  },
  {
    name: 'Foil-Pack Trail Fajitas',
    meta: 'Serves 8 · 40 min',
    ingredients: [
      '2 lb sliced chicken or steak',
      '3 bell peppers, sliced',
      '2 onions, sliced',
      '2 tbsp oil',
      '1 packet fajita seasoning',
      'Tortillas, for serving'
    ],
    steps: [
      'Toss meat and vegetables with oil and fajita seasoning in a large bowl.',
      'Divide mixture into double-layered foil packets, one per patrol.',
      'Seal packets tightly and place on hot coals.',
      'Cook 12-15 minutes per side, until meat is cooked through.',
      'Open carefully (steam!) and serve with warm tortillas.'
    ],
    tip: 'Double-wrap every packet — a single layer tears on rocky coals and dumps your dinner in the fire.'
  },
  {
    name: 'Dutch Oven Cornbread',
    meta: 'Serves 10 · 35 min',
    ingredients: [
      '1 box cornbread mix (or scratch recipe)',
      '2 eggs',
      '1 cup milk',
      '1/4 cup melted butter',
      '1 cup shredded cheddar (optional)'
    ],
    steps: [
      'Grease the Dutch oven well with butter or oil.',
      'Mix cornbread batter according to package directions, folding in cheese if using.',
      'Pour into the Dutch oven and cover with lid.',
      'Place 8 coals below and 14 coals on the lid; bake 25-30 minutes.',
      'Check with a toothpick — it should come out clean.'
    ],
    tip: 'Rotate the oven and lid a quarter turn every 10 minutes for even baking without a hot spot.'
  },
  {
    name: 'Campfire Peach Cobbler',
    meta: 'Serves 12 · 45 min',
    ingredients: [
      '2 cans sliced peaches (with juice)',
      '1 box yellow cake mix',
      '1/2 cup butter, sliced thin',
      '1 tsp cinnamon',
      'Whipped cream, for serving'
    ],
    steps: [
      'Pour peaches with juice into a lined Dutch oven.',
      'Sprinkle cake mix evenly over the peaches — do not stir.',
      'Dot the top with butter slices and dust with cinnamon.',
      'Cover and bake with 8 coals below, 16 on the lid, about 30 minutes.',
      'Serve warm with whipped cream.'
    ],
    tip: 'Resist stirring the layers — that’s what gives cobbler its crisp top and gooey base.'
  },
  {
    name: 'Placeholder',
    ingredients: [
      'Replace here'
    ],
    steps: [
      'Replace here'
    ]
  }
];
