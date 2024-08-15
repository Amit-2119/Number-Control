let number = 0;
        const history = [];
        let currentIndex = -1;

        function updateUI() {
            document.getElementById('number').textContent = number;
            document.getElementById('progressBar').style.width = (number / 150 * 100) + '%';
        }

        function pushToHistory() {
            history.splice(currentIndex + 1);
            history.push(number);
            currentIndex++;
        }

        document.getElementById('increment').addEventListener('click', () => {
            if (number < 150) {
                pushToHistory();
                number++;
                updateUI();
            }
        });

        document.getElementById('decrement').addEventListener('click', () => {
            if (number > 0) {
                pushToHistory();
                number--;
                updateUI();
            }
        });

        document.getElementById('undo').addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                number = history[currentIndex];
                updateUI();
            }
        });

        document.getElementById('reset').addEventListener('click', () => {
            number = 0;
            currentIndex = -1;
            history.length = 0;
            updateUI();
        });

        updateUI();