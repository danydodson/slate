/** @type {import('bd-scss/lib/config').Config} */
export default {
	meta: {
		name: 'Slate',
		author: 'Gibbu & Tropical',
		description: `An optimized, consistent, and functional theme for Discord based on GitHub's design language.`,
		version: '1.2',
		source: 'https://github.com/danydodson/slate',
		invite: 'TeRQEPb'
	},
	base: {
		output: 'dist/dist'
	},
	baseImport: 'https://raw.githubusercontent.com/danydodson/slate/refs/heads/main/dist/dist/Slate.css',
	addons: [
		['./src/addons/_toolbar-actions.scss', 'dist/ToolbarActions.css'],
		['./src/addons/_serverlist.scss', 'dist/Serverlist.css']
	]
};
