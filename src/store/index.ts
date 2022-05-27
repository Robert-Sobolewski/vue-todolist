import { createStore } from 'vuex'
import {TodoManager} from '@/types'
export default createStore({
  state: {
    currentUser: <TodoManager.IUser|null> null,
    users:<TodoManager.IUser[]> []
  },
  getters: {
  },
  mutations: {
     registerUser: function(state:any, newUser: TodoManager.IUser){

      let storedUsers:TodoManager.IUser[] = JSON.parse( localStorage.getItem('todo-users')!)||[]
      let getUser = storedUsers.find((user:TodoManager.IUser) => user.email ==newUser.email)
      let ids = storedUsers.map((user:TodoManager.IUser) => user.id)
      if(!getUser){
        let newId:number = Math.random()
        while(ids.includes(newId)){
          newId= Math.random()
        }
        let createdUser= {...newUser,id:newId }
        storedUsers.push(createdUser)
        state.currentUser = createdUser
        localStorage.setItem('currentUser', JSON.stringify(createdUser))
        localStorage.setItem('todo-users', JSON.stringify(storedUsers))
      }else{
        state.currentUser = getUser
        localStorage.setItem('currentUser', JSON.stringify(state.currentUser))
      }

    }
  },
  actions: {
   
  },
  modules: {
  }
})
