import { ref } from 'vue'

const getPost = (id ) => {
    const post = ref(null)
    const error = ref(null)

    const load = async () => {
      try{
        let response = await fetch("http://localhost:3000/posts/" + id);
        if(!response.ok){
          throw Error('that post does not exist')
        }
        post.value = await response.json()
      }catch(err){
        error.value = err.message
        console.log(error.value)
      }
    }

    return { post, error, load }
}

export default getPost