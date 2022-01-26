Hooks.once('init', async function() {
	for(let bar=0; bar<=4; bar++) {
		for(let slot=0; slot<=9; slot++) {
			let macro_slot = bar ? `${bar}${slot}` : `${slot}`;

			game.keybindings.register("fvtt-hotbar-macro-keybinds", `absHotbarBind${macro_slot}`, {
				name: `Execute Hotbar ${bar + 1} Slot ${slot}`,
				hint: `Pressing this will execute the macro in hotbar slot ${slot} of bar ${bar + 1}`,
				onDown: () => {
					let macro_id = game.user.data.hotbar[macro_slot];
					if(macro_id) {
						let macro = game.macros.get(macro_id);
						if(macro) {
							// Execute it
							macro.execute();
						}
					}
				},
				onUp: () => {},
				precedence: CONST.KEYBINDING_PRECEDENCE.NORMAL
			});
		}
	}
});

// Hooks.once('ready', async function() {

// });
