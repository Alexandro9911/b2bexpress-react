export default function FlipCard({
    variant = "click",
    frontOfCard ,
    backOfCard,
    id
}) {
    return <flip-card variant={variant} data-id={id} >
        <section slot="front">
            {frontOfCard}
        </section>
        <section slot="back">
            {backOfCard}
        </section>
    </flip-card>
}