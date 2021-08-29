const getMealName = () => {
    const mealName = document.getElementById('search-field');
    loadData(mealName.value);
    mealName.value = '';
}

const loadData = async mealID => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealID}`;
    const response = await fetch(url);
    const jsonData = await response.json();
    // console.log(mealID.length);
    // console.log(jsonData.meals[0]);
    if (mealID.length > 0)
        processData(jsonData.meals)
}

const processData = meals => {
    const postContainer = document.getElementById('post-container');
    meals.forEach(meal => {
        console.log(meal);
        const newPost = document.createElement('div');
        newPost.classList.add('col-12', 'col-lg-4', 'col-md-6', 'text-center');
        newPost.innerHTML = `
        <img class="meal-img" src="${meal.strMealThumb}">
        <h5>${meal.strMeal}</h5>
        `;
        postContainer.appendChild(newPost);
    })
}