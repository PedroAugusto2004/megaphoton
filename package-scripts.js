// Deployment helper scripts
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Check for security issues before deployment
function securityCheck() {
  console.log('🔍 Running security checks...');
  
  const issues = [];
  
  // Check for hardcoded API keys
  const filesToCheck = [
    'src/**/*.ts',
    'src/**/*.tsx', 
    'src/**/*.js',
    'api/**/*.js'
  ];
  
  // Check .env.local for exposed keys
  const envPath = path.join(__dirname, '.env.local');
  if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, 'utf8');
    if (envContent.includes('AIzaSy') && !envContent.includes('your-gemini-api-key-here')) {
      issues.push('⚠️  Potential API key found in .env.local');
    }
  }
  
  // Check if .env.local is in .gitignore
  const gitignorePath = path.join(__dirname, '.gitignore');
  if (fs.existsSync(gitignorePath)) {
    const gitignoreContent = fs.readFileSync(gitignorePath, 'utf8');
    if (!gitignoreContent.includes('.env.local')) {
      issues.push('❌ .env.local not in .gitignore');
    }
  }
  
  if (issues.length === 0) {
    console.log('✅ Security checks passed');
    return true;
  } else {
    console.log('❌ Security issues found:');
    issues.forEach(issue => console.log(issue));
    return false;
  }
}

// Pre-deployment checklist
function preDeploymentCheck() {
  console.log('🚀 Pre-deployment checklist...');
  
  const checks = [
    {
      name: 'Security check',
      fn: securityCheck
    },
    {
      name: 'Environment variables',
      fn: () => {
        const requiredEnvVars = ['GEMINI_API_KEY'];
        const missing = requiredEnvVars.filter(env => !process.env[env]);
        if (missing.length > 0) {
          console.log(`❌ Missing environment variables: ${missing.join(', ')}`);
          return false;
        }
        console.log('✅ Environment variables configured');
        return true;
      }
    }
  ];
  
  const results = checks.map(check => {
    console.log(`\nRunning ${check.name}...`);
    return check.fn();
  });
  
  const allPassed = results.every(result => result);
  
  if (allPassed) {
    console.log('\n🎉 All checks passed! Ready for deployment.');
  } else {
    console.log('\n❌ Some checks failed. Please fix issues before deploying.');
    process.exit(1);
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  const command = process.argv[2];
  
  switch (command) {
    case 'security':
      securityCheck();
      break;
    case 'pre-deploy':
      preDeploymentCheck();
      break;
    default:
      console.log('Available commands: security, pre-deploy');
  }
}