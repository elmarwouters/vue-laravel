<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Laravel</title>
</head>
<body>
    <div id="app">
        <menu-list :items="['one', 'two', 'three']">
            <template slot="menu-item" slot-scope="props">
                <div>
                    <em v-text="props.item"></em>
                </div>
            </template>
        </menu-list>
    </div>

    <script src="/js/app.js"></script>
</body>
</html>