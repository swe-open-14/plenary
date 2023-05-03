const album = [
	"black dog",
	"rock and roll",
	"the battle of evermore",
	"stairway to heaven",
];

shuffle(album);

/**
 * This is a JSDoc comment.
 *
 * @param {string[]} playlist
 * @returns
 */
function shuffle(playlist) {
	const i = Math.floor(Math.random() * playlist.lenth);
	const j = Math.floor(Math.random() * playlist.length);

	const track = playlist.splice(i, 1)[0];

	playlist.splice(j, 0, track);

	return playlist;
}
