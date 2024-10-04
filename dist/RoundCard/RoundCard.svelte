<script>export let title = "Title";
export let date = "01/01/1970";
export let excerpt = "Incipit...";
export let img = "";
export let alt = "alt description";
export let url = "https://example.com";
</script>

<a href={url} class="flex-none card card-hover rounded-lg hover:shadow-lg p-4 space-y-3 w-72 md:w-80">
    <img src={img} class="bg-black/50" alt={alt} />
    <h6 class="h6">{date}</h6>
    <h4 class="h4">{title}</h4>
    <p>{excerpt}</p>
</a>
