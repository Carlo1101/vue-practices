<template>
  <div class="home">
    <h1>Home</h1>
    <!-- <PostList v-if="showPosts" :posts="posts"/> -->
    <!-- <button @click="showPosts = !showPosts">toggle posts</button>
    <button @click="posts.pop()">delete a post</button> -->
    <!-- <h2>Reactive</h2>
    <p>{{ninjaTwo.name}} - {{ninjaTwo.age}} - {{nametwo}}</p>
    <button @click="updateNinjaTwo">Update ninja two</button> -->
    <!-- <input type="text" v-model="search">
    <p>search term - {{search}}</p>
    <div v-for="name in matchingNames" :key="name">
      {{name}}
    </div> -->
    <div v-if="error">{{error}}</div>
    <div v-if="posts.length">
      <PostList :posts="posts"/>
    </div>
    <div v-else>Loading...</div>

  </div>
</template>

<script>
// import { ref, reactive } from 'vue'
// import { computed, ref, watch, watchEffect } from 'vue'
import PostList from '../components/PostList.vue'
import getPosts from '../composables/getPosts'

export default {
  name: 'Home',
  components: { PostList },
  setup() {
    // reactive function is only reactive when the parameter passed into it is an object
    // it does not work with native types such as String and Integer,
    // there fore it is easier to use ref for your dynamic pages

    // const ninjaTwo = reactive({name: 'luigi', age: 35})
    // const nametwo = reactive('luigi')
    // const updateNinjaTwo = () => {
    //   ninjaTwo.age = 45
    //   nametwo = 'yoshi'
    // }

    // return {ninjaTwo, updateNinjaTwo, nametwo}

    // watch can be used to detect changes that occurs to your DOM element
    // while watchEffect can also be used to detect changes that occur to your DOM element, it 
    // runs at the start of the component, therefor it is good to use for fetching data from
    // a database.

    // const names = ref(['mario', 'yoshi', 'luigi', 'toad', 'bowser', 'koopa', 'peach'])
    // const search = ref('')

    // to stop watch and watch effect, assign them into a variable
    // const stopWatch = watch(search, () => {...})

    // watch(search, () => {
    //   console.log('watch function ran')
    // })

    // watchEffect(() => {
    //   console.log('watchEffect funtion run', search.value)
    // })

    // const matchingNames = computed(() => {
    //   return names.value.filter(name => name.includes(search.value))
    // })

    // return { names, search, matchingNames }

    // const posts = ref([
    //   {title: 'welcome to the blog', body: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam voluptatibus velit, aspernatur labore ipsam incidunt, vitae consectetur omnis aut illum nisi fuga. Eos quis similique porro? Nisi facere, architecto quod voluptate repudiandae eveniet facilis amet, unde repellendus praesentium voluptatem exercitationem eum fugit illum minima laboriosam, recusandae vero delectus ullam dolor incidunt. Perferendis dolorum consequatur, officiis error cupiditate tenetur aliquam aperiam corrupti iste illo voluptatem? Quo consequuntur, obcaecati sit in accusantium molestiae doloremque placeat voluptatem distinctio alias eius dicta dolorem debitis excepturi quis iusto voluptates inventore, voluptas dignissimos velit eaque explicabo at repudiandae. Quis minima et repellat omnis officiis consequatur enim. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam voluptatibus velit, aspernatur labore ipsam incidunt, vitae consectetur omnis aut illum nisi fuga. Eos quis similique porro? Nisi facere, architecto quod voluptate repudiandae eveniet facilis amet, unde repellendus praesentium voluptatem exercitationem eum fugit illum minima laboriosam, recusandae vero delectus ullam dolor incidunt. Perferendis dolorum consequatur, officiis error cupiditate tenetur aliquam aperiam corrupti iste illo voluptatem? Quo consequuntur, obcaecati sit in accusantium molestiae doloremque placeat voluptatem distinctio alias eius dicta dolorem debitis excepturi quis iusto voluptates inventore, voluptas dignissimos velit eaque explicabo at repudiandae. Quis minima et repellat omnis officiis consequatur enim.', id: 1},
    //   {title: 'top 5 css tips', body: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam voluptatibus velit, aspernatur labore ipsam incidunt, vitae consectetur omnis aut illum nisi fuga. Eos quis similique porro? Nisi facere, architecto quod voluptate repudiandae eveniet facilis amet, unde repellendus praesentium voluptatem exercitationem eum fugit illum minima laboriosam, recusandae vero delectus ullam dolor incidunt. Perferendis dolorum consequatur, officiis error cupiditate tenetur aliquam aperiam corrupti iste illo voluptatem? Quo consequuntur, obcaecati sit in accusantium molestiae doloremque placeat voluptatem distinctio alias eius dicta dolorem debitis excepturi quis iusto voluptates inventore, voluptas dignissimos velit eaque explicabo at repudiandae. Quis minima et repellat omnis officiis consequatur enim. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam voluptatibus velit, aspernatur labore ipsam incidunt, vitae consectetur omnis aut illum nisi fuga. Eos quis similique porro? Nisi facere, architecto quod voluptate repudiandae eveniet facilis amet, unde repellendus praesentium voluptatem exercitationem eum fugit illum minima laboriosam, recusandae vero delectus ullam dolor incidunt. Perferendis dolorum consequatur, officiis error cupiditate tenetur aliquam aperiam corrupti iste illo voluptatem? Quo consequuntur, obcaecati sit in accusantium molestiae doloremque placeat voluptatem distinctio alias eius dicta dolorem debitis excepturi quis iusto voluptates inventore, voluptas dignissimos velit eaque explicabo at repudiandae. Quis minima et repellat omnis officiis consequatur enim.', id: 2}
    // ])

    // const showPosts = ref(true)

    // return { posts, showPosts }

    // const posts = ref([])
    // const error = ref(null)

    // const load = async () => {
    //   try{
    //     let response = await fetch("http://localhost:3000/posts");
    //     if(!response.ok){
    //       throw Error('no data available')
    //     }
    //     posts.value = await response.json()
    //   }catch(err){
    //     error.value = err.message
    //     console.log(error.value)
    //   }
    // }
    
    // load()

    // return { posts, error }

    const {posts, error, load} = getPosts()
    load()
    return {posts, error}
  }
}
</script>


