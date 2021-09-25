class Math {
    sum = (...args) => {
        return args.reduce((previous, current) => current + previous);
    }

    minus = (...args) => {
        setTimeout(() => {
            args.reduce((previous, current) => current - previous);
        }, 1500);
    }

    average = (...args) => {
        return this.sum(...args) / args.length;
    }
}

module.exports = Math;