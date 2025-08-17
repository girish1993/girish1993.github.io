# Building an ML Pipeline with Ray and Snowflake

**Posted: August 17, 2025**

In this project, I developed a distributed ML pipeline using Ray and Snowflake SPCS.

## Overview
- **Goal**: Train a model on large datasets efficiently.
- **Tech Stack**: Python, Ray, Snowflake, Docker.

## Implementation
1. Loaded data using `ray.data.read_snowflake`.
2. Trained models with Ray's `Trainer` API.
3. Deployed via Docker to Snowflake SPCS.

## Results
Reduced training time by 50%.

![Pipeline Diagram](images/pipeline.png)

## Demo
<video controls>
  <source src="images/demo.mp4" type="video/mp4">
</video>

[View the project](https://github.com/<your-username>/<repo-name>)