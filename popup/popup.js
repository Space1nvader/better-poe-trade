
const FAVORITES_STORAGE_KEY = 'favorites'


const getFavorites = async () => {
    if(chrome?.storage?.local){
        const favoritesExtensionStorage = await chrome.storage.local.get(FAVORITES_STORAGE_KEY)
        if(favoritesExtensionStorage[FAVORITES_STORAGE_KEY]?.length){
             const favorites = favoritesExtensionStorage[FAVORITES_STORAGE_KEY] 
             const favoritesList = document.querySelector('.favorites-list');
    
             favorites.forEach(favorite => {
                const favoriteItem = document.createElement('div');
                favoriteItem.className = 'favorite-item';
                favoriteItem.innerHTML = `<a target="_blank" href="${favorite.link}">${favorite.name}</a>`;
                
                favoritesList.appendChild(favoriteItem);
            });
        }
    }
}

getFavorites()


