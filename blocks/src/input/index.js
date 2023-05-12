/**
 * Internal dependencies
 */
import json from './block.json';
import edit from './edit';
import save from './save';
import variations from './variations';
import registerHizzleBlockType from '../utils/register-block';

// Register the checkbox block.
const { name, icon } = json;

registerHizzleBlockType( name, {
	icon,
	edit,
	save,
	variations,
} );
