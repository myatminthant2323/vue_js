<template>
	<div>
		<h1 class="text-danger">Exercise Component</h1>
		<p>This is exercise for child components</p>
		<p>This is exercise for child components with id = <span class="text-danger">{{id}}</span></p>
	</div>
</template>

<script type="text/javascript">
	export default {
		props: ['id']
	}
</script>

<style type="text/css">
	
</style>