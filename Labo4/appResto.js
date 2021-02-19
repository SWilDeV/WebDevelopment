const API_URL = "https://ufoodapi.herokuapp.com";

export const getUsers = async() =>{
    const response = await fetch(`${API_URL}/unsecure/users`);
    const responseContent = await response.json();
    return responseContent.items;
}

export const getRestaurants =async() =>{
    const response = await fetch(`${API_URL}/unsecure/restaurants`)
    const responseContent = await response.json();
    return responseContent.items;
}