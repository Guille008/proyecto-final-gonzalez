//export function CartWidge(){
//    return(
//        <button>🛒</button>
//    )
//}
export function CartWidge() {
    const lanzarConfetti = () => {
        window.confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
        });
    };

    return (
        <button onClick={lanzarConfetti}>🛒</button>
    );
}