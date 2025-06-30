import Team from '../set';

const volkodav = {
    health: 100, level: 1, strategy: 'Warrior',
};
const tilorn = {
    health: 20, level: 1, strategy: 'Wizard',
};
const eurych = {
    health: 80, level: 1, strategy: 'Scientist',
};

test('test add', () => {
    const team = new Team();
    team.add(volkodav);
    team.add(tilorn);
    team.add(eurych);

    const result = new Set();
    result.add(volkodav);
    result.add(tilorn);
    result.add(eurych);

    expect(team.members).toEqual(result);
});

test('test add error', () => {
    expect(() => {
        const team = new Team();
        team.add(volkodav);
        team.add(volkodav);
    }).toThrow();
});

test('test addAll', () => {
    const team = new Team();
    team.addAll(volkodav, tilorn, eurych);

    const result = new Set();
    result.add(volkodav);
    result.add(tilorn);
    result.add(eurych);

    expect(team.members).toEqual(result);
});

test('test toArray', () => {
    const team = new Team();
    team.addAll(volkodav, tilorn, eurych);

    const result = [
        {
            health: 100, level: 1, strategy: 'Warrior',
        },
        {
            health: 20, level: 1, strategy: 'Wizard',
        },
        {
            health: 80, level: 1, strategy: 'Scientist',
        },
    ];

    expect(team.toArray()).toEqual(result);
});