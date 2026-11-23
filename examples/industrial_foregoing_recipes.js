ServerEvents.recipes(event => {
	event.recipes.industrialforegoing.crusher( // the pickaxe action in the stonework factory
		'minecraft:tnt',
		'minecraft:sand'
	);

    event.recipes.industrialforegoing.dissolution_chamber(
        ["minecraft:tnt"], // input items
        "minecraft:water", // input fluid
        "minecraft:sand", // output item
        100 // time
    ).outputFluid("minecraft:water"); // output fluid (optional)

	event.recipes.industrialforegoing.fluid_extractor(
        "minecraft:tnt", // input block
        "minecraft:sand", // output block
        0.5, // break chance
        "minecraft:lava" // output fluid
    );

	event.recipes.industrialforegoing.laser_drill_ore(
		{ item: 'minecraft:tnt', count: 1 },
		'industrialforegoing:red_laser_lens',
		[{
			biome_filter: { whitelist: [], blacklist: [] },
			dimension_filter: { whitelist: [], blacklist: ['minecraft:the_end'] },
			depth_min: 0,
			depth_max: 255,
			weight: 5
		}]
	)

	event.recipes.industrialforegoing.laser_drill_fluid(
		Fluid.of('minecraft:lava', 10),
		'industrialforegoing:purple_laser_lens',
		[{
			biome_filter: { whitelist: [], blacklist: [] },
			dimension_filter: { whitelist: [], blacklist: [] },
			depth_min: -64,
			depth_max: 256,
			weight: 8
		}],
		{ entity: { type: 'minecraft:zombie' }, data: {}, display: '' }
	)

    event.recipes.industrialforegoing.stonework_generate(
        "minecraft:tnt",
        100, // water needed
        100, // lava needed
        50, // water consumed
        50 // lava consumed
    );
})
