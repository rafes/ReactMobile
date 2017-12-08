import { AsyncStorage } from 'react-native';
import { STORAGE_KEYS } from './Constants.js'

class Storage {
	async getBooks() {
		try {
			// await AsyncStorage.removeItem(STORAGE_KEYS.PRODUCTS);
			return JSON.parse(await AsyncStorage.getItem(STORAGE_KEYS.BOOKS)) || [];
		} catch (error) {
			console.log(error);
		}

		return [];
	}

	async setBooks(products) {
		try {
			AsyncStorage.setItem(STORAGE_KEYS.BOOKS, JSON.stringify(products));
		} catch (error) {
			console.log(error);
		}
	}
}

export default new Storage();