# MovieDashboard using RTK

Using NextJs Framework, I created a movie dashboard app with simple and easy to perform CRUD operations.

With the help of RTK, app state management, which is global state managment, become more powerful.

For form validation, I used Formik and Yup.

React bootstrap and Material UI was beautifully used for quick UI, but for main layout, I wrote CSS from scratch.

I used typescript throughout the project for type safety.

## Code Highlight

### Mock Data Transformation
```
export const transformMovies = MoviesData.map(movie=>
                                            Object.entries(movie).map(([key, value]) => [key[0].toLowerCase().concat(key.slice(1,)), value]))
                                                    .map(item=> Object.fromEntries(item));

export const movieExtracted = transformMovies.map(movie=>({
        '_id' : (Math.random()+'').split('.')[1],
        'title': movie.title,
        'year': movie.year.slice(0,4),
        'director': {
                'name': movie.director,
        },
}))

export const reviewExtracted = transformMovies.map((movie, index)=>({
        '_id' : (Math.random()+'').split('.')[1],
        'movie': movieExtracted[index]._id,
        'review': movie.plot,
        'rating': movie.imdbRating,
}))
```

### Payload Creation and Action Dispatch

```
        const id = Math.random()+"";
        const newReview: Review = {
            _id: review?._id || id?.split('.')[1],
            movie: movie?._id,
            review: values.review,
            rating: values.rating,
        }
        console.log(newReview);
        edit? dispatch(updateReview(newReview)) : dispatch(addReview(newReview));
```
### Checkout Live Demo!

[`MovieDashboard App`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app)

