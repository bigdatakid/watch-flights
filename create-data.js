
//started with airlines on-time performance data set in the airlines.flights collection
db.getSiblingDB("airlines").flights.aggregate([
		{$match: {"Origin": 'TUS', "Dest": 'SLC', "DepTime": {$gte: 1200,$lt: 1250}}},
		{
			$project: {
				"Year" : 1,
				"Quarter" : 1,
				"Month" : 1,
				"DayofMonth" : 1,
				"DayOfWeek" : 1,
				"FlightDate" : 1,
				"UniqueCarrier" : 1,
				"AirlineID" : 1,
				"Carrier" : 1,
				"TailNum" : 1,
				"FlightNum" : 1,
				"OriginAirportID" : 1,
				"OriginAirportSeqID" : 1,
				"OriginCityMarketID" : 1,
				"Origin" : 1,
				"OriginCityName" : 1,
				"OriginState" : 1,
				"OriginStateFips" : 1,
				"OriginStateName" : 1,
				"OriginWac" : 1,
				"DestAirportID" : 1,
				"DestAirportSeqID" : 1,
				"DestCityMarketID" : 1,
				"Dest" : 1,
				"DestCityName" : 1,
				"DestState" : 1,
				"DestStateFips" : 1,
				"DestStateName" : 1,
				"DestWac" : 1,
				"CRSDepTime" : 1,
				"DepTime" : 1,
				"ArrTime" : 1,
				"ArrDelay" : 1,
				"ArrDel15" : 1,
				"ArrivalDelayGroups" : 1,
				"ArrTimeBlk" : 1,
				"Cancelled" :10,
				"CancellationCode" : 1,
				"Diverted" : 1,
				"CRSElapsedTime" : 1,
				"AirTime" : 1,
				"Flights" : 1,
				"Distance" : 1,
				"DistanceGroup" : 1
		 	}
		 },
		{$addFields: {"seatsAvail": 2}},
		{$out: "flightInventory" }
	])
