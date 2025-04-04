const n=`TArray<AA_WaypointActor*> AA_PathfindingManager::FindPath(AA_WaypointActor* StartWaypoint, AA_WaypointActor* TargetWaypoint){
    TArray<AA_WaypointActor*> resultPath;
    TMap<AA_WaypointActor*, int> DistanceMap
    TMap<AA_WaypointActor*, AA_WaypointActor*> ParentMap;
    
    for (AA_WaypointActor* thisWp : AllWaypoints){
        DistanceMap.Add(thisWp, 999999);
        ParentMap.Add(thisWp, nullptr);
    }

    if(AllWaypoints.Num() == 0){
        GEngine->AddOnScreenDebugMessage(-1, 2.f, FColor::Purple, TEXT("NO WAYPOINTS WTF"));
        return TArray<AA_WaypointActor*>();
    }	
    if(DistanceMap.Num() == 0){
        return TArray<AA_WaypointActor*>();
    }
    
    
    DistanceMap[StartWaypoint] = 0;

    // Create an empty set to keep record all visited waypoints
    TSet<AA_WaypointActor*> VisitedWaypoints;

    // Main loop for Dijkstra's algorithm
    while (VisitedWaypoints.Num() < AllWaypoints.Num()){
        // Find the waypoint with the smallest distance that has not been visited
        AA_WaypointActor* CurrentWaypoint = nullptr;
        float MinDistance = 999999;//From big to small, reminder to self at 3am
        for (AA_WaypointActor* thisWaypoint : AllWaypoints){
            if (!VisitedWaypoints.Contains(thisWaypoint) && DistanceMap[thisWaypoint] < MinDistance){
                CurrentWaypoint = thisWaypoint;
                MinDistance = DistanceMap[thisWaypoint];
            }
        }

        if (!CurrentWaypoint){
            GEngine->AddOnScreenDebugMessage(10, 5.f, FColor::White, TEXT("Cant seem to find path or smtg broke"));
            break;
        }

        // Mark the current waypoint as visited
        VisitedWaypoints.Add(CurrentWaypoint);

        // Update distances and parents for adjacent waypoints
        for (FWaypointConnection connectionStruct : CurrentWaypoint->ConnectedWaypoints){
            AA_WaypointActor* theConnectedWaypoint = connectionStruct.ConnectedWaypoint;//Singular
            float NewDistance = DistanceMap[CurrentWaypoint] + 1.0f; // Assume all connections have the same weight (1.0f)

            if (NewDistance < DistanceMap[theConnectedWaypoint]){
                DistanceMap[theConnectedWaypoint] = NewDistance;
                ParentMap[theConnectedWaypoint] = CurrentWaypoint;
            }
        }
    }

    // Get parent->parent->parent of defined path from the target
    AA_WaypointActor* tPoint = TargetWaypoint;
    while (tPoint != nullptr){
        resultPath.Insert(tPoint, 0);//First goes all the way back
        tPoint = ParentMap[tPoint];
    }
    return resultPath;
}`;export{n as default};
