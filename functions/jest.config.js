const jestConfig = {
    verbose: true,
    'transform': {
        '^.+\\.ts?$': 'ts-jest',
    },
    testMatch: ['<rootDir>/__tests__/*.ts'],
}

module.exports = jestConfig