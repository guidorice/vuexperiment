// adopt a store pattern
// https://vuejs.org/v2/guide/state-management.html

const store = {
    debug: true,
    state: {
        name: '',
    },
    setNameAction (newValue) {
        if (this.debug) console.log('setNameAction triggered with', newValue);
        this.state.name = newValue;
    },
    clearNameAction () {
        if (this.debug) console.log('clear clearNameAction triggered');
        this.state.name = '';
    }
};

export default store;
