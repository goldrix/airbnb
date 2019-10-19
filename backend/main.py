import  Searcher

address = "5 Lexington Ave, New York, NY 10010"
distance = 1000

local_eats = Searcher.Searcher(address, distance, 'restaurant', 'local_eats.json')
local_attractions = Searcher.Searcher(address, distance, 'local_attractions', 'local_attractions.json')
local_essentials = Searcher.Searcher(address, distance, 'local_essentials', 'local_essentials.json')
