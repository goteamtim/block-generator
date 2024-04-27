

class BlockGenerator {
    constructor(blocks) {
        this._blocks = {
            "1": ['c', 'n', 'g', 'w'],
            "2": ['o', 'p', 'h', '&#x2665;'],
            "3": ['n', 'p', 'e', 'k'],
            "4": ['g', 'p', 'j', 'a'],
            "5": ['r', 'y', 'l', '4'],
            "6": ['a', 'n', 'o', 'f'],
            "7": ['t', 'i', 'm', 'u'],
            "8": ['u', 'v', 's', 'a'],
            "9": ['l', 'e', 'b', 'r'],
            "10": ['a', 'l', 'o', 'm'],
            "11": ['t', 'r', 'd', 'i'],
            "12": ['i', 'd', 'h', 'v'],
            "13": ['o', 'r', 'g', 's'],
            "14": ['n', 'd', 'e', 't'],
            "15": ['s', 'w', 'c', 'a'],
            "16": ['flag', 'y', 'e', 'q'],
        };;
    }

    Find_Blocks(text) {
        const textWithoutSpaces = text.replace(/\s/g, ""); // Ignore spaces
        const solutions = [];
        this._findAllSolutions(textWithoutSpaces, this._blocks, [], solutions);
        return solutions;
    }

    _findAllSolutions(text, blocks, currentSolution, solutions) {
        // Limit to the first solution here
        if (solutions.length > 0 ) {
            return;
        }

        if (text === "") {
            solutions.push([...currentSolution]);
            return;
        }

        for (const [key, block] of Object.entries(blocks)) {
            if (block.includes(text[0])) {
                currentSolution.push(parseInt(key));
                const remainingText = text.slice(1);
                const updatedBlocks = { ...blocks };
                delete updatedBlocks[key];
                this._findAllSolutions(remainingText, updatedBlocks, currentSolution, solutions);
                currentSolution.pop();
            }
        }
    }
}
