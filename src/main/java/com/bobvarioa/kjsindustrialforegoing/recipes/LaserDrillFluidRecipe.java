package com.bobvarioa.kjsindustrialforegoing.recipes;

import com.bobvarioa.kjsindustrialforegoing.TitaniumComponents;
import dev.latvian.mods.kubejs.fluid.OutputFluid;
import dev.latvian.mods.kubejs.item.InputItem;
import dev.latvian.mods.kubejs.recipe.RecipeKey;
import dev.latvian.mods.kubejs.recipe.component.*;
import dev.latvian.mods.kubejs.recipe.schema.RecipeSchema;

import java.util.Map;

public interface LaserDrillFluidRecipe {
    RecipeKey<OutputFluid> OUTPUT = TitaniumComponents.OUTPUT_FLUID.key("output");
    RecipeKey<RecipeComponentBuilderMap[]> RARITY = TitaniumComponents.RARITY.asArray().key("rarity");

    RecipeKey<InputItem> CATALYST = ItemComponents.INPUT.key("catalyst");

    RecipeKey<String> ENTITY = StringComponent.ANY.key("entity");

    RecipeKey<Integer> POINTER = NumberComponent.INT.key("pointer").optional(0);
    // idk what this even does

    RecipeSchema SCHEMA = new RecipeSchema(OUTPUT, CATALYST, RARITY, ENTITY, POINTER);
}
