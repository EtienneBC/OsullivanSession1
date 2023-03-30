const game = {
    xTurn: true,
    xState: [],
    oState: [],
    winningStates: [
        // Rangé
        ['0', '1', '2'],
        ['3', '4', '5'],
        ['6', '7', '8'],

        // Columns
        ['0', '3', '6'],
        ['1', '4', '7'],
        ['2', '5', '8'],

        // Diagonal
        ['0', '4', '8'],
        ['2', '4', '6']
    ]
}

document.addEventListener('click', event => {
    const target = event.target;
    const isCell = target.classList.contains('grid-cell');
    const isDisabled = target.classList.contains('disabled');

    if (isCell && !isDisabled) {
        const cellValue = target.dataset.value;

        game.xTurn === true ?
            game.xState.push(cellValue) :
            game.oState.push(cellValue)

        target.classList.add('disabled')
        target.classList.add(game.xTurn ? 'x' : 'o');

        game.xTurn = !game.xTurn;

        // Verifie si la partie est nulle
        if (!document.querySelectorAll('.grid-cell:not(.disabled').length) {
            document.querySelector('.game-over').classList.add('visible');
            document.querySelector('.game-over-text').textContent = "Partie Nulle!"
        }

        game.winningStates.forEach(winningState => {
            const xWins = winningState.every(etat => game.xState.includes(etat))
            const oWins = winningState.every(etat => game.oState.includes(etat))

            if (xWins || oWins) {
                document.querySelectorAll('.grid-cell').forEach(cell => {
                    cell.classList.add('disabled');
                });
                document.querySelector('.game-over').classList.add('visible');
                document.querySelector('.game-over-text').textContent = xWins
                ? 'Les X ont gagne!'
                : 'Les O ont gagne!'

            
            }
        })
    }
})
document.querySelector('.restart').addEventListener('click', () => {
    document.querySelector('.game-over').classList.remove('visible');
    document.querySelectorAll('.grid-cell').forEach(cell => {
        cell.classList.remove('disabled', 'x', 'o')
    })
    game.xTurn = true;
    game.xState = [];
    game.oState = [];

})