WHITE = 0
BLACK = 1
BOARD_SIZE = 8

class ReversiBoard(object):
    def __init__(self):
        #2次元リストの作成
        #各要素の初期値はNONE
        self.cells = []
        for i in range(BOARD_SIZE):
            self.cells.append([None for i in range(BOARD_SIZE)])

        self.cells[3][3] = WHITE
        self.cells[3][4] = BLACK
        self.cells[4][3] = BLACK
        self.cells[4][4] = WHITE

    def put_disk(self, x, y, player):
        #ほかの石があると置けない
        if self.cells[y][x] is not None:
            return False

        #獲得できる石がない時も置けない
        flippable = self.list_flippable_disks(x,y,player)
        if flippable == []:
            return False

        #石を置く処理
        self.cells[y][x] = player
        for x, y in flippable:
            self.cells[y][x] = player

        return True

    def list_flippable_disks(self, x, y, player):

        PREV = -1
        NEXT = 1
        DIRECTION = [PREV, 0, NEXT]
        flippable = []

        for dx in DIRECTION:
            for dy in DIRECTION:
                if dx == 0 and dy == 0:
                    continue

                temp = []
                depth = 0
                while(True):
                    depth += 1

                    #方向＊距離を求める座標に加算し直線的な探索をする
                    rx = x + (dx * depth)
                    ry = y + (dy * depth)

                    #調べる座標（rx,ry）がボードの範囲内ならば
                    if 0 <= rx < BOARD_SIZE and 0 <= ry < BOARD_SIZE:
                        request = self.cells[ry][rx]

                        if request is None:
                            break

                        if request == player: #自分の石が見つかった時
                            if temp != []: #探索範囲内に獲得可能な石があるとき
                                flippable.extend(temp) #flippableに追加

                        #相手の石が見つかった時
                        else:
                            #獲得可能な石として一時保存
                            temp.append((rx, ry))
                    
                    else:
                        break
        return flippable

    def show_board(self):
        print("--"*20)
        for i in self.cells:
            for cell in i:
                if cell == WHITE:
                    print("W", end=" ")
                elif cell == BLACK:
                    print("B", end=" ")
                else:
                    print("*", end=" ")
            print("\n", end="")

    def list_possible_cell(self, player):

        possible = []
        for x in range(BOARD_SIZE):
            for y in range(BOARD_SIZE):
                if self.cells[y][x] is not None:
                    continue
                if self.list_flippable_disks(x, y, player) == []:
                    continue
                else:
                    possible.append((x, y))

        return possible

class Game(ReversiBoard):
    DRAW = -1

    def __init__(self, turn=0, start_player=BLACK):
        super().__init__()
        self.player = start_player
        self.turn = turn
        self.winner = None
        self.was_passed = False

    def is_finished(self):
        return self.winner is not None
    
    def list_possible_cell(self):
        return super().list_possible_cell(self.player)

    def get_color(self, player):
        if player == WHITE:
            return "WHITE"
        if player == BLACK:
            return "BLACK"
        else:
            return "DRAW"

    def get_current_player(self):
        return self.player

    def get_next_player(self):
        return WHITE if self.player == BLACK else BLACK

    def shift_player(self):
        self.player = self.get_next_player()

    def put_disk(self, x, y):
        if super().put_disk(x, y, self.player):
            self.was_passed = False
            self.player = self.get_next_player()
            self.turn += 1

        else:
            return False
    
    def pass_moving(self):
        if self.was_passed:
            return self.finish_game()

        self.was_passed = True
        self.shift_player()

    def show_score(self):
        print("{}: {}".format("BLACK", self.disks[BLACK]))
        print("{}: {}".format("WHITE", self.disks[WHITE]))

    def get_disk_map(self):
        

    def finish_game(self):
        self.disks = self.get_disk_map()
        white = self.disks[WHITE]
        black = self.disks[BLACK]

        if white < black:
            self.winner = BLACK
        elif black < white:
            self.winner = WHITE
        else:
            self.winner = self.on_draw()

        return self.winner

    def on_draw(self):
        return self.DRAW

if __name__ == "__main__":
    # board = ReversiBoard()
    # board.show_board()
    # board.put_disk(3,2,BLACK)
    # board.show_board()

    game = Game()
    while(True):
        possible = game.list_possible_cell()
        player_name = game.get_color(game.get_current_player())

        if game.is_finished():
            game.show_board()
            game.show_score()
            print("Winner: {}".format(game.get_color(game.winner)))
            break
        
        if possible == []:
            print("player {} can not puts.".format(player_name))
            game.pass_moving()
            continue

        game.show_board()
        game.show_score()

        print("player: " + player_name + "さんのターンです")
        print("置く場所を選択してください: " + str(possible) + "0番目から" + str(len(possible)-1) + "番目を整数で選択してください")
        index = input("どこに置く？: ")
        if index.isdigit() and int(index) < int(len(possible)):
            game.put_disk(*possible[int(index)])
        else:
            print("整数0～で選択してください")


        

    
