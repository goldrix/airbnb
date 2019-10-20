import  Searcher
import yaml

with open("config.yml", 'r') as ymlfile:
    cfg = yaml.load(ymlfile)


address = cfg['address']
distance = cfg['distance']

local_eats = Searcher.Searcher(address, distance, 'restaurant', 'local_eats.json')
local_attractions = Searcher.Searcher(address, distance, 'local_attractions', 'local_attractions.json')
local_essentials = Searcher.Searcher(address, distance, 'local_essentials', 'local_essentials.json')
