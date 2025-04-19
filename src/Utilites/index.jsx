// Get favorites from localStorage
export const getFavorite = () => {
    const favorite = localStorage.getItem('favorite');
    return favorite ? JSON.parse(favorite) : [];
  };
  
  // Add a phone to favorites
  export const addToFavorite = (phone) => {
    const favorite = getFavorite();
    const isExist = favorite.find(p => p.id === phone.id);
  
    if (isExist) {
      return 'Already added to favorites';
    }
  
    favorite.push(phone);
    localStorage.setItem('favorite', JSON.stringify(favorite));
    return 'Added to favorites';
  };
 export const removeFavorite=(id)=>{
    const favorite=getFavorite()
    const remaingFavorite=favorite.filter(phone=> phone.id!==id)
    localStorage.setItem('favorite',JSON.stringify(remaingFavorite))
 }  