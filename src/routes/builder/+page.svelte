<script>
  import { EditorInit } from '$lib/components/pageBuilder'
	
  let { data = $bindable() } = $props()
  
  let editorItemFocus = $state('')
  
  let editorData = $state([{
    id: '@Zb2ZGTDT3]%fj2t',
    type: 'group',
    settings: {
      groupRow: 'group',
      width: { content: [720, 'px'], wide: [100, '%']},
      justification: 'center',
      background: '#a68246',
      padding: [[10, 'vh'], [0, 'px'], [10, 'vh'], [0, 'px']],
      margin: [[0, 'px'], [0, 'px'], [0, 'px'], [0, 'px']],
      minHeight: [0, 'vh'],
      blockSpacing: [10, 'px'],
      border: [['', 0, ''], ['', 0, ''], ['', 0, ''], ['', 0, '']],
      classes: 'test'
    },
    data: [{
      id: 'PHspR99d3B*zvg',
      type: 'heading',
      settings: {
        heading: 'h1',
        width: { content: [720, 'px'], wide: [100, '%']},
        justification: 'center',
        background: '#a68246',
        padding: [[10, 'vh'], [0, 'px'], [10, 'vh'], [0, 'px']],
        margin: [[0, 'px'], [0, 'px'], [0, 'px'], [0, 'px']],
        minHeight: [0, 'vh'],
        blockSpacing: [10, 'px'],
        border: [['', 0, ''], ['', 0, ''], ['', 0, ''], ['', 0, '']],
        classes: 'test'
      },
      data: 'Dino Digital'
    }, {
      id: 'hdJtUa2uS64<mq',
      type: 'paragraph',
      settings: {
        align: 'left',
        background: '',
        padding: [[0, 'px'], [0, 'px'], [0, 'px'], [0, 'px']],
        margin: [[0, 'px'], [0, 'px'], [0, 'px'], [0, 'px']],
        border: [['', 0, ''], ['', 0, ''], ['', 0, ''], ['', 0, '']],
        classes: ''
      },
      data: 'Testing the paragraph'
    }]
  }])

</script>

<svelte:head>
	<title>Builder • Daniel Groves</title>
</svelte:head>

<div class="wrap">
  
  <EditorInit 
    bind:data={editorData}
    bind:itemSet={editorItemFocus}
  />

</div>