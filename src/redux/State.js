import ProfileReducer from "./ProfileReducer";
import MessageReducer from "./MessageReducer";

let Store={
    _RerenderTree(){
    },
    _State:{
        ProfilePage:{
            AllPosts:[
                {message:"11111", likes:'2', ava:'https://wallbox.ru/wallpapers/main/201135/sneg-irbis-snezhnyy-bars-b4de837.jpg'},
                { message:"22222", likes:'1', ava:'https://pbs.twimg.com/media/DfcRcaNXUAAfkJa.jpg:large'},
                { message:"44444", likes:'8', ava:'https://pbs.twimg.com/media/DfcRcaNXUAAfkJa.jpg:large'},
                {message:"33333", likes:'4', ava:'https://i.pinimg.com/736x/1d/f9/6d/1df96d950e53a34a1cb42fa5c325535f--funny-animal-gifs.jpg'}
        ],
         NewPostText:'',
        },
        MessagePage:{
        NewMessageText:'',
        InfoDialog:[
            {id:1,name:'Masha'},
            {id:2,name: 'Vanya'},
            {id:3,name:'Petya'},
            {id:4,name:'Puta'}
        ],
        InfoMessages:[
            {id:1, message:'Hi'},
            {id:2,message:'Hey'},
            {id:3,message:'Hy'}
        ]
        }
        
    },
    getState(){
        return this._State;
    },

    Subscribe(observer){
        this._RerenderTree=observer;
        },
    dispatch(action){
        this._State.ProfilePage=ProfileReducer(this._State.ProfilePage, action)
        this._State.MessagePage=MessageReducer(this._State.MessagePage, action)
       
        this._RerenderTree(this._State);
       
       
    }
}
export const CHANGEPOST_CREATEACTION=(text)=>{
    return({type:'CHANGE-POST', NewText:text})
}
export const ADDPOST_CREATEACTION=()=>{
    return({type:'ADD-POST'})
}




