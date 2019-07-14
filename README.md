# vuextodo
Todo application using Vuex. Vues is statement management pattern similar to Redux.

For Deleting all files recursively and then Folders
---------------------------------------------------
DEL /F/Q/S .
rmdir /S /Q %DIRNAME%

Git Useful Tips
--------------
```
git remote -v
git remote rm destination

Instead of removing and re-adding, you can do this:
git remote set-url origin https://github.com/shajeebs/vuextodo.git

git status

git add .    - adds all files
git commit -m 'First commit'
git push origin master --force  # <- caution, --force can delete others work.
```

##Vue Bootstrap Documentation
```
https://bootstrap-vue.js.org/docs/components/table
    <b-table striped hover :items="cats">
        <template slot="first_name" slot-scope="data">
        <!--`data.value` is the value after formatted by the Formatter -->
        <!--<a :href="`#${data.value.replace(/[^a-z]+/i,'-').toLowerCase()}`">{{ data.value }}</a>-->
        <router-link :to="`/pet/cat/${data.index}`"> {{data.value}} </router-link>
        </template>
    </b-table>

```

##Forms
```
    <b-form @submit="onSubmit" @reset="onReset">
        <b-form-group id="input-group-1" label="Firstname:" label-for="input-1">
            <b-form-input
            id="input-1"
            v-model="formData.first_name"
            required
            placeholder="Enter first name"
            ></b-form-input>
        </b-form-group>
        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

https://kbroman.org/github_tutorial/pages/init.html

You’ve now got a local git repository. You can use git locally, like that, if you want. But if you want the thing to have a home on github, do the following.

Go to github.
Log in to your account.
Click the new repository button in the top-right. You’ll have an option there to initialize the repository with a README file, but I don’t.
Click the “Create repository” button.
Now, follow the second set of instructions, “Push an existing repository…”

$ git remote add origin git@github.com:username/new_repo
$ git push -u origin master
Actually, the first line of the instructions will say

$ git remote add origin https://github.com/username/new_repo
But I use git@github.com:username/new_repo rather than https://github.com/username/new_repo, as the former is for use with ssh (if you set up ssh as I mentioned in “Your first time”, then you won’t have to type your password every time you push things to github). If you use the latter construction, you’ll have to type your github password every time you push to github.
