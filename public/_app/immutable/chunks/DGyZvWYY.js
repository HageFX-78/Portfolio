const n=`TArray<AA_WaypointActor*> AA_PathfindingManager::FindPath(AA_WaypointActor* StartWaypoint, AA_WaypointActor* TargetWaypoint){\r
    TArray<AA_WaypointActor*> resultPath;\r
    TMap<AA_WaypointActor*, int> DistanceMap\r
    TMap<AA_WaypointActor*, AA_WaypointActor*> ParentMap;\r
    \r
    for (AA_WaypointActor* thisWp : AllWaypoints){\r
        DistanceMap.Add(thisWp, 999999);\r
        ParentMap.Add(thisWp, nullptr);\r
    }\r
\r
    if(AllWaypoints.Num() == 0){\r
        GEngine->AddOnScreenDebugMessage(-1, 2.f, FColor::Purple, TEXT("NO WAYPOINTS WTF"));\r
        return TArray<AA_WaypointActor*>();\r
    }	\r
    if(DistanceMap.Num() == 0){\r
        return TArray<AA_WaypointActor*>();\r
    }\r
    \r
    \r
    DistanceMap[StartWaypoint] = 0;\r
\r
    // Create an empty set to keep record all visited waypoints\r
    TSet<AA_WaypointActor*> VisitedWaypoints;\r
\r
    // Main loop for Dijkstra's algorithm\r
    while (VisitedWaypoints.Num() < AllWaypoints.Num()){\r
        // Find the waypoint with the smallest distance that has not been visited\r
        AA_WaypointActor* CurrentWaypoint = nullptr;\r
        float MinDistance = 999999;//From big to small, reminder to self at 3am\r
        for (AA_WaypointActor* thisWaypoint : AllWaypoints){\r
            if (!VisitedWaypoints.Contains(thisWaypoint) && DistanceMap[thisWaypoint] < MinDistance){\r
                CurrentWaypoint = thisWaypoint;\r
                MinDistance = DistanceMap[thisWaypoint];\r
            }\r
        }\r
\r
        if (!CurrentWaypoint){\r
            GEngine->AddOnScreenDebugMessage(10, 5.f, FColor::White, TEXT("Cant seem to find path or smtg broke"));\r
            break;\r
        }\r
\r
        // Mark the current waypoint as visited\r
        VisitedWaypoints.Add(CurrentWaypoint);\r
\r
        // Update distances and parents for adjacent waypoints\r
        for (FWaypointConnection connectionStruct : CurrentWaypoint->ConnectedWaypoints){\r
            AA_WaypointActor* theConnectedWaypoint = connectionStruct.ConnectedWaypoint;//Singular\r
            float NewDistance = DistanceMap[CurrentWaypoint] + 1.0f; // Assume all connections have the same weight (1.0f)\r
\r
            if (NewDistance < DistanceMap[theConnectedWaypoint]){\r
                DistanceMap[theConnectedWaypoint] = NewDistance;\r
                ParentMap[theConnectedWaypoint] = CurrentWaypoint;\r
            }\r
        }\r
    }\r
\r
    // Get parent->parent->parent of defined path from the target\r
    AA_WaypointActor* tPoint = TargetWaypoint;\r
    while (tPoint != nullptr){\r
        resultPath.Insert(tPoint, 0);//First goes all the way back\r
        tPoint = ParentMap[tPoint];\r
    }\r
    return resultPath;\r
}`;export{n as default};
