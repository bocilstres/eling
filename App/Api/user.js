import base from "./base";

export const login = async data => {
    try{
        const result = await base.post('/login',data,{
            headers:{
                "Content-Type": 'application/json'
            },
        })
        return result.data;
    }catch(error){
        console.error(error);
        throw error;
    }
}
export const logout = async (AccessToken) => {
    try{
        const response = await base.delete(
            '/logout',
            {
                headers:{
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${AccessToken}`
                }
            }
        );
        return response.data;
    }catch (error){
        throw error;
    }
}

