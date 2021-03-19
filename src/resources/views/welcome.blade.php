<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    <body>
       <div id="app">
            Test

            <ul>
                <li v-for="skill in skills" v-text="skill"></li>
            </ul>
       </div> 

       <script src="https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.js"></script>

       <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>

        <script src="/js/app.js"></script>
    </body>
</html>
