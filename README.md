node.js + express hello world 1 example
====

GitHub reqiures:

    README.md
    .gitattributes
    .gitignore

Express generates:

    app.js
    package.json
    routes/
        index.js
        user.js
    views/
        index.jade
        layout.jade
    public/
        images/
        javascripts/
        stylesheets/
            style.css

Heroku needs:

    Procfile
    package.json

Node Ninja needs:

    config.json
    package.json

http://test-lightspeedc.herokuapp.com/


## memo

    heroku create APP
    git remote add heroku git@heroku.com:APP.git
    heroku git:remote --app APP
    heroku config:add TZ=Asia/Tokyo
    git config --global http.proxy http://server:port
    git push heroku master
