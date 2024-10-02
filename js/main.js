
import users from './assets/json/users.json' assert { type: "json" };


(() => {
    const usersList = JSON.parse(JSON.stringify(users));

})();