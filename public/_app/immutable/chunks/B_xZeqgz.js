const n=`#include "CoreMinimal.h"\r
#include "GameFramework/Actor.h"\r
#include "Components/BillboardComponent.h"\r
#include "A_WaypointActor.generated.h"\r
\r
\r
USTRUCT(BlueprintType)\r
struct FWaypointConnection//Struct for each connection to waypoints with state to see if is blocked\r
{\r
    GENERATED_BODY()\r
\r
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Pathfinding")\r
    AA_WaypointActor* ConnectedWaypoint;\r
\r
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Pathfinding")\r
    bool bIsRoadBlocked = false;\r
\r
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Pathfinding")\r
    int distanceWeighted = 1;//Default 1 for now\r
};\r
\r
UCLASS()\r
class KAIJUGAMETEST_API AA_WaypointActor : public AActor\r
{\r
    GENERATED_BODY()\r
        \r
    public:	\r
        // Sets default values for this actor's properties\r
        AA_WaypointActor();\r
\r
    protected:\r
        // Called when the game starts or when spawned\r
        virtual void BeginPlay() override;\r
\r
    public:\r
        // Called every frame\r
        virtual void Tick(float DeltaTime) override;\r
\r
        UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Pathfinding")\r
        int nodeID;\r
        \r
        UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Pathfinding")\r
        TArray<FWaypointConnection> ConnectedWaypoints;//Waypoints connected to this specific node\r
        \r
        UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Pathfinding")\r
        FString pointName = "default_name";\r
\r
        UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "Pathfinding")\r
        class USceneComponent* DefaultSceneRoot; // Declaration of DefaultSceneRoot component\r
        \r
        UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "Pathfinding")\r
        class UBillboardComponent* SpriteComponent;\r
\r
};`;export{n as default};
